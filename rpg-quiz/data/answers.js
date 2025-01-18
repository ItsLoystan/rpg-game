const answers = {
    "1": {
        "Spam email filters": {
            name: 'Spam email filters',
            damage: 50,
            outcome: 'correct! Reason: Spam email filters uses machine learning to learn and recognise patterns to recognise spams.',
            question: 'Where have you likely encountered AI in your daily life?'
        },
        "Fitness trackers calculating calories burned": {
            name: 'Fitness trackers calculating calories burned',
            damage: 50,
            outcome: 'incorrect! Reason: A fitness tracker calculating calories burned is not AI because it uses predefined algorithms, not adaptive or learning-based intelligence.',
            question: 'Where have you likely encountered AI in your daily life?'
        },
        "Interacting with a customer service chatbot": {
            name: 'Interacting with a customer service chatbot',
            damage: 50,
            outcome: 'incorrect! Reason: A customer service chatbot is not necessarily AI because it may use rule-based scripts rather than advanced machine learning or natural language processing.',
            question: 'Where have you likely encountered AI in your daily life?'
        },
        "Unlocking your smartphone with facial recognition": {
            name: 'Unlocking your smartphone with facial recognition',
            damage: 50,
            outcome: 'incorrect! Reason: Unlocking your smartphone with facial recognition is not AI because it uses pre-programmed algorithms for pattern matching rather than adaptive, learning-based intelligence.',
            question: 'Where have you likely encountered AI in your daily life?'
        }
    },
    "2": {
        "Submitting AI-generated essays as your own work": {
            "name": "Submitting AI-generated essays as your own work",
            "damage": 50,
            "outcome": "incorrect! Reason: Submitting AI-generated answers as your own work in academic settings is unethical because it constitutes plagiarism and misrepresents your true knowledge, skills, and effort, undermining the educational process and academic integrity.",
            "question": "Which of the following is considered the most ethical way to use AI-generated content in academic work?"
        },
        "Using AI to paraphrase sources without citation": {
            "name": "Using AI to paraphrase sources without citation",
            "damage": 50,
            "outcome": "incorrect! Reason: Using AI to paraphrase sources without citation is unethical because it misrepresents the origin of ideas and fails to give proper credit to the original authors, violating academic integrity and intellectual property rights.",
            "question": "Which of the following is considered the most ethical way to use AI-generated content in academic work?"
        },
        "Relying solely on AI for research without human verification": {
            "name": "Relying solely on AI for research without human verification",
            "damage": 50,
            "outcome": "incorrect! Reason: Relying solely on AI for research without human verification is unethical because it neglects critical human oversight, potentially leading to the spread of misinformation and compromising the integrity and reliability of academic work.",
            "question": "Which of the following is considered the most ethical way to use AI-generated content in academic work?"
        },
        "Using AI as a brainstorming tool and citing it as a source": {
            "name": "Using AI as a brainstorming tool and citing it as a source",
            "damage": 50,
            "outcome": "correct! Reason: Using AI as a brainstorming tool and citing it as a source is the most ethical approach because it acknowledges the AI's contribution while maintaining transparency about the origin of ideas, fostering academic integrity and responsible AI use in research.",
            "question": "Which of the following is considered the most ethical way to use AI-generated content in academic work?"
        }
    },
    "3": {
        "The AI doesn\'t have enough internet speed": {
            "name": "The AI doesn\'t have enough internet speed",
            "damage": 50,
            "outcome": "incorrect! Reason: Internet speed is an irrelevant technical factor to the AI's ability to understand user queries.",
            "question": "If an AI assistant (like Siri or Alexa) misunderstands your request, what's the most likely reason?"
        },
        "The AI lacks context about your intent": {
            "name": "The AI lacks context about your intent",
            "damage": 50,
            "outcome": "correct! Reason: AI assistants often struggle to understand the nuanced context and specific intentions behind user requests, leading to misinterpretations despite having accurate speech recognition and language processing capabilities.",
            "question": "If an AI assistant (like Siri or Alexa) misunderstands your request, what's the most likely reason?"
        },
        "The AI was not trained in your accent": {
            "name": "The AI was not trained in your accent",
            "damage": 50,
            "outcome": "incorrect! Reason: Modern AI assistants use advanced speech recognition technologies that can adapt to and understand multiple accents, making accent a minor factor compared to complex language interpretation challenges.",
            "question": "If an AI assistant (like Siri or Alexa) misunderstands your request, what's the most likely reason?"
        },
        "The AI cannot process your voice in real time": {
            "name": "The AI cannot process your voice in real time",
            "damage": 50,
            "outcome": "incorrect! Reason:  AI misunderstandings stem from complex language processing challenges, not real-time voice processing limitations, as modern AI assistants are designed with sophisticated, near-instantaneous speech recognition capabilities",
            "question": "If an AI assistant (like Siri or Alexa) misunderstands your request, what's the most likely reason?"
        }
    },
    "4": {
        "It copies existing art exactly": {
            "name": "It copies existing art exactly",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "What makes an AI image generator (like DALL-E) able to create realistic-looking art?"
        },
        "It analyzes patterns in huge datasets of images and text": {
            "name": "It analyzes patterns in huge datasets of images and text",
            "damage": 50,
            "outcome": "correct! Reason:",
            "question": "What makes an AI image generator (like DALL-E) able to create realistic-looking art?"
        },
        "It draws everything by hand": {
            "name": "It draws everything by hand",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "What makes an AI image generator (like DALL-E) able to create realistic-looking art?"
        },
        "It uses pre-made templates for every image": {
            "name": "It uses pre-made templates for every image",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "What makes an AI image generator (like DALL-E) able to create realistic-looking art?"
        }
    },
    "5": {
        "They lack access to emotional vocabulary": {
            "name": "They lack access to emotional vocabulary",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why can't AI-powered chatbots feel emotions?"
        },
        "Emotions \'t data-driven processes": {
            "name": "Emotions aren\'t data-driven processes",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why can't AI-powered chatbots feel emotions?"
        },
        "AI cannot experience consciousness or feelings": {
            "name": "AI cannot experience consciousness or feelings",
            "damage": 50,
            "outcome": "correct! Reason:",
            "question": "Why can't AI-powered chatbots feel emotions?"
        },
        "They\'re programmed to avoid emotional responses": {
            "name": "They\'re programmed to avoid emotional responses",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why can't AI-powered chatbots feel emotions?"
        }
    },
    "6": {
        "They run out of computing power": {
            "name": "They run out of computing power",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why do AI systems sometimes give incorrect or biased results?"
        },
        "They rely on incomplete or biased training data": {
            "name": "They rely on incomplete or biased training data",
            "damage": 50,
            "outcome": "correct! Reason:",
            "question": "Why do AI systems sometimes give incorrect or biased results?"
        },
        "They cannot process large datasets": {
            "name": "They cannot process large datasets",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why do AI systems sometimes give incorrect or biased results?"
        },
        "They are programmed to intentionally make mistakes": {
            "name": "They are programmed to intentionally make mistakes",
            "damage": 50,
            "outcome": "incorrect! Reason:",
            "question": "Why do AI systems sometimes give incorrect or biased results?"
        }
    }
}
