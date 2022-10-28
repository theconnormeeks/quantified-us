import pandas as pd

from hashlib import new
from pandas.tseries.offsets import *

data ='/Users/connormeeks/Desktop/quantified-us/flask/static/data/netflix/NetflixViewingHistory.csv' #TODO: make this a relative file path

df = pd.read_csv(data)
df["Date2"] = pd.to_datetime(df["Date"])
df["day"] = pd.to_datetime(df['Date2']).dt.date
df['week ending'] = df['Date2'] + Week(weekday=4)
df["week ending day"] = pd.to_datetime(df['week ending']).dt.date
df['month ending'] = pd.to_datetime(df['Date2']) + MonthEnd(1)
df["month ending day"] = pd.to_datetime(df['month ending']).dt.date

max_time = df["Date2"].max()
min_time = df["Date2"].min()
# print("The dataset includes videos from {} to {}.".format(min_time.strftime("%m/%d/%Y"), max_time.strftime("%m/%d/%Y")))

videos_count = len(df)
days_count = max_time - min_time
days_count = days_count.days
avg_views = videos_count / days_count
# print("I watched {} videos over {} days. That's an average of {:.1f} per day.".format(videos_count, days_count, avg_views))

myDict = dict(df['month ending day'].value_counts().sort_index())
myKeys = list(myDict.keys())
myVals = list(myDict.values())

myDictNetflix = {str(key): str(value) for key, value in myDict.items()} # convert dates to strings to serialize to json


