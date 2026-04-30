import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  orderBy,
  getFirestore
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Types
export interface Notice {
  id: string;
  title: string;
  date: string;
  isImportant?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  img: string;
  education?: string;
  experience?: string;
  phone?: string;
  bio?: string;
}

export interface Routine {
  id: string;
  className: string;
  section: string;
  date: string;
  fileName: string;
}

export interface Result {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  section: string;
  gpa: string;
  sessions?: string;
}

// Hook to manage data with Firebase
export function useSchoolData() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time synchronization
    const qNotices = query(collection(db, 'notices'), orderBy('date', 'desc'));
    const qTeachers = query(collection(db, 'teachers'));
    const qRoutines = query(collection(db, 'routines'), orderBy('date', 'desc'));
    const qResults = query(collection(db, 'results'));

    const unsubNotices = onSnapshot(qNotices, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notice)));
    });

    const unsubTeachers = onSnapshot(qTeachers, (snapshot) => {
      setTeachers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Teacher)));
    });

    const unsubRoutines = onSnapshot(qRoutines, (snapshot) => {
      setRoutines(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Routine)));
    });

    const unsubResults = onSnapshot(qResults, (snapshot) => {
      setResults(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Result)));
      setLoading(false);
    });

    return () => {
      unsubNotices();
      unsubTeachers();
      unsubRoutines();
      unsubResults();
    };
  }, []);

  // CRUD Operations
  const addNotice = async (notice: Omit<Notice, 'id'>) => await addDoc(collection(db, 'notices'), notice);
  const deleteNotice = async (id: string) => await deleteDoc(doc(db, 'notices', id));

  const addTeacher = async (teacher: Omit<Teacher, 'id'>) => await addDoc(collection(db, 'teachers'), teacher);
  const deleteTeacher = async (id: string) => await deleteDoc(doc(db, 'teachers', id));

  const addRoutine = async (routine: Omit<Routine, 'id'>) => await addDoc(collection(db, 'routines'), routine);
  const deleteRoutine = async (id: string) => await deleteDoc(doc(db, 'routines', id));

  const addResult = async (result: Omit<Result, 'id'>) => await addDoc(collection(db, 'results'), result);
  const deleteResult = async (id: string) => await deleteDoc(doc(db, 'results', id));

  return {
    notices, addNotice, deleteNotice,
    teachers, addTeacher, deleteTeacher,
    routines, addRoutine, deleteRoutine,
    results, addResult, deleteResult,
    loading
  };
}
