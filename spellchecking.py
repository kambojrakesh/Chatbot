from rasa.nlu.components import Component
from rasa.nlu import utils
from rasa.nlu.model import Metadata
from rasa.shared.nlu.training_data.training_data import TrainingData
from rasa.shared.nlu.training_data.message import Message
from typing import Any, Dict, Hashable, List, Optional, Set, Text, Tuple, Type, Iterable
from typing import Any, Optional, Text, Dict
from rasa.nlu.config import RasaNLUModelConfig
from rasa.shared.nlu.training_data.training_data import TrainingData
from rasa.shared.nlu.training_data.message import Message
from rasa.shared.nlu.constants import TEXT


#logger = logging.getLogger(__name__)
from spellchecker import SpellChecker
spell = SpellChecker()

class CorrectSpelling(Component):

    name = "Spell_checker"
    provides = ["message"]
    requires = ["message"]
    language_list = ["en"]

    def __init__(self, component_config=None):
        super(CorrectSpelling, self).__init__(component_config)

    def train(self, training_data, cfg, **kwargs):
        """Not needed, because the the model is pretrained"""
        pass

    def process(self, message: Message, **kwargs: Any) -> None:
        """Retrieve the text message, do spelling correction word by word,
        then append all the words and form the sentence,
        pass it to next component of pipeline"""

        textdata = message.get(TEXT)
        #print(type(textdata))
        #print(textdata)
        if textdata is not None:
            #print("--1:",textdata)
            textdata1 = textdata.split()
            #print("--2:",textdata1)
            new_message = ' '.join(spell.correction(w) for w in textdata1)
            #print("--3:", new_message)
            message.set(TEXT, new_message)
            #print("--4:", message)
            message.text = new_message
			#Test
            
    def persist(self,file_name, model_dir):
        """Pass because a pre-trained model is already persisted"""
        pass
    
    
    
    @classmethod
    def load(
        cls,
        meta: Dict[Text, Any],
        model_dir: Optional[Text] = None,
        model_metadata: Optional["Metadata"] = None,
        cached_component: Optional["Component"] = None,
        **kwargs: Any,
    ) -> "Component":
        """Load this component from file."""
        if cached_component:
            return cached_component
        else:
            return cls(meta)
