# Importing some libraries
import features as features

import pandas as pd
import numpy as np
import re
import time

from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.svm import LinearSVC
from sklearn.model_selection import cross_val_score
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier

import pickle

from nltk.stem.porter import PorterStemmer

# Loading data from json file
data = pd.read_json('Sarcasm_Headlines_Dataset.json', lines=True)

# Replacing special symbols and digits in headline column
data['headline'] = data['headline'].apply(lambda s: re.sub('[^a-zA-Z]', ' ', s))

# Checking null values in headline column
print(data['headline'].isnull().any())

print(data.head())

# getting features and labels
features = data['headline']
labels = data['is_sarcastic']

# Stemming our data
ps = PorterStemmer()

features = features.apply(lambda x: x.split())
features = features.apply(lambda x : ' '.join([ps.stem(word) for word in x]))


# Term form - Inverse Document form Vectorization
# vectorizing the data with maximum of 5000 features
from sklearn.feature_extraction.text import TfidfVectorizer
tv = TfidfVectorizer(max_features=5000)

features = list(features)

features = tv.fit_transform(features).toarray()

# getting training and testing data
start_time = time.time()
features_train, features_test, labels_train, labels_test = train_test_split(features, labels, test_size = .05,random_state=0)
print('----- %s seconds -----' %(round(time.time() - start_time)))

del features

# #Model 1
# Using linear support vector classifier
lsvc = LinearSVC()
# training the model
lsvc.fit(features_train, labels_train)
# getting the score of train and test data
print(lsvc.score(features_train, labels_train))   # 90.93
print(lsvc.score(features_test, labels_test))     # 83.75
# predicting labels for test data
labels_pred = lsvc.predict(features_test)

# # model 2:-
# # Using Gaussian Naive Bayes
# gnb = GaussianNB()
# gnb.fit(features_train, labels_train)
# print(gnb.score(features_train, labels_train))  # 78.86
# print(gnb.score(features_test, labels_test))    # 73.80

# # model 3:-
# # Logistic Regression
# lr = LogisticRegression()
# lr.fit(features_train, labels_train)
# print(lr.score(features_train, labels_train))   # 88.16
# print(lr.score(features_test, labels_test))     # 83.08

# # model 4:-
# # Random Forest Classifier
# rfc = RandomForestClassifier(n_estimators = 10, random_state = 0)
# rfc.fit(features_train, labels_train)
# print(rfc.score(features_train, labels_train))  # 98.82
# print(rfc.score(features_test, labels_test))    # 79.71

# getting confusion matrix
print(confusion_matrix(labels_test, labels_pred))

# getting cross validation score
cvs = cross_val_score(estimator = lsvc, X = features_train, y = labels_train, cv = 10)

# getting mean score
print(cvs.mean() * 100)


# saving the model in disk for later use
with open('model.pkl', 'wb') as f:
    pickle.dump(lsvc, f)

# saving the model in disk for later use
with open('tfidf.pkl', 'wb') as f:
    pickle.dump(tv, f)