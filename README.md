# **Redux Toolkit Todo App with Next.js (TypeScript)**

## **Project Overview**
This project is a **Todo List Application** built using **Next.js, TypeScript, Redux Toolkit, and Tailwind CSS**. The application allows users to add, update, and remove tasks efficiently using Redux state management. It features a clean and modern UI with interactive functionalities for task management.

## **Tech Stack**
- **Next.js** – For building the React-based frontend with server-side rendering.
- **TypeScript** – For type safety and better maintainability.
- **Redux Toolkit** – For managing global state efficiently.
- **Lucide React** – For icons and improved UI/UX.
- **Tailwind CSS** – For styling and responsive design.

## **Core Features**
### **1. Add Todos**
- Users can add new tasks using an input field.
- Each task is stored in the Redux state and assigned a unique ID using `nanoid()`.

### **2. Update Todos**
- Users can edit an existing task.
- Inline editing feature allows users to click the "Edit" button, modify the task, and save it.

### **3. Delete Todos**
- Users can remove tasks from the list.
- A delete button allows quick removal of tasks from Redux state.

### **4. State Management with Redux Toolkit**
- The app uses `createSlice()` from Redux Toolkit to handle adding, updating, and deleting todos.
- `useSelector` is used to retrieve todos from the Redux store.
- `useDispatch` is used to dispatch actions for state updates.

### **5. UI/UX Enhancements**
- Fully responsive design using Tailwind CSS.
- Smooth transitions and hover effects.
- Uses **Lucide React icons** for better UI aesthetics.
