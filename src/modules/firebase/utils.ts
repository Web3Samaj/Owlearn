import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './firebaseConfig'

/// Things to consider
// -> what to do for completed students in case new lectures or info are added
// -> individual rating for the course (maybe considered in progress section)

// Adds a New Course to the Courses DataBase (only new Course)
export const addNewCourse = async (
  courseAddress: string,
  totalNoOfLectures: number
) => {
  try {
    const docRef = doc(db, 'Courses', `${courseAddress}`)
    await setDoc(docRef, {
      Rating: 0,
      TotalLectures: totalNoOfLectures,
      TotalCompletedStudents: 0,
    })
  } catch (error) {
    console.log(error)
  }
}

// to update the course overall Rating
export const updateCourseRating = async (
  courseAddress: string,
  courseRating: number
) => {
  try {
    const docRef = doc(db, 'Courses', `${courseAddress}`)
    await updateDoc(docRef, {
      Rating: courseRating,
    })
  } catch (error) {
    console.log(error)
  }
}

// Add or Edit the no of lectures
export const updateCourseLectures = async (
  courseAddress: string,
  newTotalLectures: number
) => {
  try {
    const docRef = doc(db, 'Courses', `${courseAddress}`)
    await updateDoc(docRef, {
      TotalLectures: newTotalLectures,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCourse = async (courseAddress: string) => {
  try {
    const docRef = doc(db, 'Courses', `${courseAddress}`)
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data()
    return docData
  } catch (error) {
    console.log(error)
  }
}

// responsible for updating the progress in completing the owlearnCourse
// Also handles the case where the user is supposed to complete the course
export const updateProgress = async (
  courseAddress: string,
  userAddress: string,
  totalWatched: number
) => {
  try {
    const docRef = doc(db, 'Courses', `${courseAddress}`)
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data()

    if (totalWatched > docData?.TotalLectures) {
      return 'INVALID TOTAL WATCHED'
    }

    const progDocRef = doc(
      db,
      'Courses',
      `${courseAddress}`,
      'Progress',
      `${userAddress}`
    )

    if (totalWatched == docData?.TotalLectures) {
      await setDoc(progDocRef, {
        TotalLectureWatched: totalWatched,
        HasCompleted: true,
        CompletionRank: docData?.TotalCompletedStudents + 1,
        CompletedAt: serverTimestamp(),
      })

      await updateDoc(docRef, {
        TotalCompletedStudents: docData?.TotalCompletedStudents + 1,
      })
    } else {
      await setDoc(progDocRef, {
        TotalLectureWatched: totalWatched,
        HasCompleted: false,
        CompletionRank: null,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserCourseProgress = async (
  courseAddress: string,
  userAddress: string
) => {
  try {
    const progDocRef = doc(
      db,
      'Courses',
      `${courseAddress}`,
      'Progress',
      `${userAddress}`
    )
    const progSnap = await getDoc(progDocRef)
    const progData = progSnap.data()
    return progData
  } catch (error) {
    console.log(error)
  }
}

// for setting the course sequence , either while adding a new lecture , updating an older one,
// it will overwrite the older records
export const setCourseSequence = async (
  courseAddress: string,
  seqNo: number,
  tokenId: number,
  lectureTitle: string
) => {
  try {
    const seqDocRef = doc(
      db,
      'Courses',
      `${courseAddress}`,
      'Sequence',
      `${seqNo}`
    )
    await setDoc(seqDocRef, {
      tokenId: tokenId,
      title: lectureTitle,
    })
  } catch (error) {
    console.log(error)
  }
}
