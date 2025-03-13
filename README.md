# Notes App (React Native)

This is a simple notes app built with React Native. It allows users to create, read, update, and delete notes and store them using [Appwrite](https://apwr.dev/traversyfeb2025). It also uses authentication through Appwrite to allow users to sign up and log in and create private notes.

<img src="/assets/images/screen.png" width="900">

This project goes with my React Native Mini-Course on YouTube.

## Usage

Install the dependencies:

```bash
npm install
```

Rename the `.env.example` file to `.env` and fill in the required environment variables. You will need to sign into Appwrite [Here](https://apwr.dev/traversyfeb2025) and create a new project and database and fill in the required details in the `.env` file.

Run the app:

```bash
npm start
```

You can then run the app on an emulator or on your phone using the Expo Go app.

You can also use your browser by going to http://localhost:8081/.

Use EAS(Expo Application Services) to build your app for Android and iOS.

```bash
npm install -g eas-cli
eas login
eas init

# For Android
eas build --platform android

# For iOS
eas build --platform ios
```
