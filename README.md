# Worktales
- [Live link of worktales](https://worktales-client.web.app/)

I've mainly discussed major five features of this website below

- I've used framer motion and AOS on homepage and also dynamic progress bar on bid request page.
- User can add a job and he or she can update or delete that job from my posted job route
- The job deadline is strict by Date.now() function. So if the date is passed user can't bid on that specific job.
- For user specific security I've used JWT token for every user and verifying the token on each and every private route.
- Job owner can accept and reject bids from biders on bid request page and biders can see their bids on my bids page.

### Run this project locally
```
npm install
```
Create a project on firebase and change .env.local file with your own credentials.
```
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials
```
Finaly, run the project on development server.
```
npm run dev
```



