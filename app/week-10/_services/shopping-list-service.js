import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems({ userId }) {
  try {
    const docRef = collection(db, "users", userId, "items");
    const docQuery = query(docRef);
    const querySnapshot = await getDocs(docQuery);
    const itemAddedList = [];
    querySnapshot.forEach((doc) => {
      let thisItem = {
        id: doc.id,
        ...doc.data(),
      };
      itemAddedList.push(thisItem);
    });
    return itemAddedList;
  } catch (error) {
    console.error(error);
  }
}

export async function addItem({ userId, item }) {
  try {
    const docRef = collection(db, "users", userId, "items");
    const docSnap = await addDoc(docRef, item);
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
}
