# **E-mail Spam Classifier**
## **About**
---
### _This project is an email spam classifier that uses machine learning algorithms to identify whether an email is spam or not. It is built using Python 3 and Scikit-Learn library._

### _The dataset used for training the classifier is Spam-Ham Dataset which consists of approx. 5172 E-mails classified as Spam or Ham._ _The classifier uses a Bag of Words model to transform the text of the emails into numerical features. It then trains a Multinomial Naive Bayes algorithm to predict whether an email is spam or not. This project uses streamlit to configure UI for the model._ 
### _For more info on streamlit visit [Streamlit Docs](https://docs.streamlit.io/)._
---

### _To run the project, follow these steps:_

1.) _Install the required Python packages by running pip install -r requirements.txt._

2.) _Download the Spam-Ham Dataset and extract it to a folder called data._

3.) _Run python spam_email_detector.py to train the classifier and make predictions on new emails._

4.) _Use command **streamlit run spam_email_detector.py** to open streamlit window in browser._

5.) _To use the saved classifier to make predictions on new emails, load it using the pickle library and call its predict method._

----
## _Screenshot_
![Image Link](https://github.com/strivercoder99/strivercoder99.github.io/blob/main/Media/ss1.png)


![Image Link](https://github.com/strivercoder99/strivercoder99.github.io/blob/main/Media/ss2.png)
