import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import streamlit as st
import time
st.title("Spam Message Classifier")
#st.subheader("Building an Email Spam Classifier using Machine Learning")
spam = pd.read_csv("spam_ham_dataset.csv")
count_vectorizer = CountVectorizer()
X_train = count_vectorizer.fit_transform(spam['text'].values.astype('U'))
y_train = spam["label_num"]
spam_detector = MultinomialNB().fit(X_train , y_train)
msg = st.text_input("Enter a Text:")
if st.button("predict"):
    with st.spinner('Wait for It!'):
        time.sleep(2)
    X_test = count_vectorizer.transform([msg])
    predicted_label = spam_detector.predict(X_test)
    if predicted_label == 0:
        st.error("This Message is Ham")

    else:
        st.error("This Message is Spam")










