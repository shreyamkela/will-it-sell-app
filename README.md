# Mobile Application Success Prediction System 
Will-It-Sell (SalePredict) - Project for CmpE 272 Course Lab in the Fall 18 semester at San Jose State University

## Project Description
Ever made an app that got you pulling all-nighters for weeks, only to get the lowest possible ranking on the app store? Feels terrible, right? Next time you build an app, use this prediction system to assess the success of your app before you start banging away at your keyboard to get that app on the app store. Our prediction system analyses the app description you provide and it provides you back with the detailed analysis of your app's potential selling quotient. With the help of this detailed report, the app developers can adapt their app with respect to the market trend, so as to increase the selling ability of the app.

<p align="middle">
  <img src="/app-images/app_thumbnail-1.PNG" width="400" />
  <img src="/app-images/app_thumbnail-2.PNG" width="400" />
  <img src="/app-images/app_thumbnail-3.PNG" width="400" />
  <img src="/app-images/app_thumbnail-4.PNG" width="400" /> 
</p>

### Methodology: 
- Prediction systems are rooted on logic-based deductions. In the ideal case, all the apps that are very similar should perform equally on the app store. This is the fundamental idea behind our prediction model. 
- As we include real world constraints such as age-group focus area, geographical focus area, app size, and so on, into the model, it gets closer to the actual market performance. 
- To find the similar descriptions, we apply Natural Language Processing on the App Store dataset to find the Nearest Neighbours of the new description entered, using TFIDF of the descriptions in the dataset and their Cosine Similarities with respect to the new description.
- Our system analyses the new description entered and determines the detailed analysis such as the potential app store rating, total number of installs, top similar apps, and so on.
- The NLP model is served through a Flask Server at the Back-end and the detailed report is rendered on the web interface with the help of ReactJS at the Front-end. 
- The *nlp_engine* folder contains the Natural Language Processing Model and the Flask Server program files, while the *ReactFrontend* folder contains the ReactJS Web Interface program files, that talk to the Flask Server.

### Natural Language Processor
![](https://github.com/shreyamkela/will-it-sell-app/blob/master/app-images/nlp_thumbnail.PNG)

### Architechture Flow
<p align="middle">
  <img src="/app-images/architechture_flow-thumbnail.PNG" />
</p>

### Dataset
https://www.kaggle.com/ramamet4/app-store-apple-data-set-10k-apps

### Initial Design Mockup (InVision)
https://invis.io/C7P3GP56X5K

### Technologies utilized
Natural Language Processing, scikit-learn, NTLK, Flask, Python, Jupyter Notebook, React, Express.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, IBM Watson Cloud, REST, Anaconda

### Team Members: 
Shreyam Kela, Sayalee Shankar Bhusari, Harsh Agarwal, Vaishali Koul
