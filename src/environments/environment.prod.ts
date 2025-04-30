/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**  If connecting to a live Firebase project (one that you set up in the
 * Firebase console) put your config vars into the the object in this file.
 * Otherwise, leave untouched to enable connection to demo project and emulators.
 * For more information about generating, finding, or using project config
 * objects, visit https://support.google.com/firebase/answer/7015592.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


Use npm

Use a <script> tag
If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

npm install firebase
Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlXEK-MRkK6F8L4cA9FgAEFZMNwVcxQHQ",
  authDomain: "ciq-firebase.firebaseapp.com",
  projectId: "ciq-firebase",
  storageBucket: "ciq-firebase.firebasestorage.app",
  messagingSenderId: "382535329062",
  appId: "1:382535329062:web:99688584f1dbb0921a4de7",
  measurementId: "G-44MFD048BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const projectConfig = {
  projectId: "ciq-firebase",
  apiKey: "AIzaSyBlXEK-MRkK6F8L4cA9FgAEFZMNwVcxQHQ",
};
