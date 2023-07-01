import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import "firebase/firestore";
import { cityDb } from "./temp/m-city-export";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDqy7NAE6TJ7ev6nHslwvn7gshTxPsAQ1I",
	authDomain: "mcity-497cc.firebaseapp.com",
	projectId: "mcity-497cc",
	storageBucket: "mcity-497cc.appspot.com",
	messagingSenderId: "89082348937",
	appId: "1:89082348937:web:c88f128cb39279b5b88d58",
	measurementId: "G-QJ575Y3GGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const storage = getStorage(app);

//----------------------------------------------------------------------------//
//To populate firestore table, call the below function once,
//otherwise on every reload, it will keep populating the firebase table
//creating duplicates

//-------Matches upload----------//
// cityDb.matches.forEach((item) => {
// 	addDoc(collection(DB, "matches"), item);
// });

//-------Players upload----------//
// cityDb.players.forEach((item) => {
// 	addDoc(collection(DB, "players"), item);
// });

//-------Positions upload----------//
// cityDb.positions.forEach((item) => {
// 	addDoc(collection(DB, "positions"), item);
// });

//-------Promotions upload----------//
// cityDb.promotions.forEach((item) => {
// 	addDoc(collection(DB, "promotions"), item);
// });

//-------Teams upload----------//
// cityDb.teams.forEach((item) => {
// 	addDoc(collection(DB, "teams"), item);
// });
//----------------------------------------------------------------------------//

const matchesRef = collection(DB, "matches");
export const matchesCollection = await getDocs(matchesRef);

export const playersRef = collection(DB, "players");
export const playersCollection = await getDocs(playersRef);

const positionsRef = collection(DB, "positions");
export const positionsCollection = await getDocs(positionsRef);

export const promotionsRef = collection(DB, "promotions");
export const promotionsCollection = await getDocs(promotionsRef);

const teamsRef = collection(DB, "teams");
export const teamsCollection = await getDocs(teamsRef);

// teamsCollection.forEach((doc) => {
// 	console.log(doc.data());
// });

export const auth = getAuth(app);
