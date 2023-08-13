import random


def random_string():
    random_list = [
        "Taking care of your mental health is essential for overall well-being.",
        "If you're struggling, remember that it's okay to seek help from a mental health professional.",
        "Practicing self-care and mindfulness can positively impact your mental well-being.",
        "You are not alone in your journey to better mental health. Reach out for support when needed.",
        "It's important to talk about your feelings and emotions with someone you trust.",
        "Remember that mental health conditions are treatable, and there's hope for a brighter future.",
        "If you or someone you know is in crisis, don't hesitate to seek immediate help from a helpline.",
        "Taking small steps towards self-improvement can make a significant difference in your mental health.",
        "Prioritize your mental health as you would with your physical health; both are equally important.",
        "Don't be afraid to express your emotions and take time for yourself when needed.",
        "Practicing gratitude and focusing on the positive aspects of life can boost your mental well-being.",
        "Mental health is a journey, and progress is not always linear. Be patient and kind to yourself.",
        "Engaging in creative activities can be therapeutic and help alleviate stress and anxiety.",
        "It's okay to ask for help and lean on others during difficult times.",
        "Remember to engage in activities that bring you joy and fulfillment to maintain balance in life."
    ]

    list_count = len(random_list)
    random_item = random.randrange(list_count)


    return random_list[random_item]