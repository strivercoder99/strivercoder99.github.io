import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model
csvfile = pd.read_csv('mark_VS_rank.csv')   # Reading Data
print(csvfile)
print(csvfile.head())
# plt.plot(csvfile.MARKS,csvfile.RANK,)
# plt.show()

res = linear_model.LinearRegression()
res.fit(csvfile[['MARKS']], csvfile[['RANK']]) #Feeding Data into the model
# print(csvfile[[294]])
#
marks = int(input("Enter Expected Marks:"))
rest = res.predict([[marks]])
print("Predicted Rank:", int(rest))

