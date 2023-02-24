import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HomeScreen from "./screens/Home/HomeScreen";
import PriveRoute from './Routing/PriveRoute';
import Employee from './screens/Employee/Employee';
import Settings from './screens/Settings/Settings';
import Profile from './screens/Profile/ProfileScreen';
import FAQ from './screens/FAQ/FAQ';
import HelpAndSupport from './screens/HelpAndSupport/HelpAndSupport';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import Auth from "./screens/Auth/Auth";
import AddEmployee from './components/AddEmployee/AddEmployee';
import EditEmployee from './components/EditEmployee/EditEmployee';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';


function Routing(rops) {
  return (
    <Routes>
      <Route element={<PriveRoute />}>
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/add/employee' element={<AddEmployee />} />
        <Route path='/edit/employee/:id' element={<EditEmployee />} />
        <Route path='/settings' element={<Settings /> } />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/faq' element={<FAQ /> } />
        <Route path='/help-and-support' element={<HelpAndSupport />} />
      </Route>

      <Route path='/auth/signin' element={<Auth />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      <Route path='*' element={<Navigate to='/auth/signin' />} />
    </Routes>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
