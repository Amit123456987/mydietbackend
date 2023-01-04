import pandas

Imagelinks = pandas.read_csv("ImageLinks.csv")

print(Imagelinks.head())

MyFoodData = pandas.read_csv("MyFoodData.csv")

print(MyFoodData.head())


result = pandas.concat([MyFoodData, Imagelinks], axis=1, join='inner')
print(result.head())

result.to_csv('FinalFoodData.csv')