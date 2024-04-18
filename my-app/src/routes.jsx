import {React} from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { FavoritesPage } from "./pages/favoritesPage/FavoritesPage.jsx";
import { CategoryPage } from "./pages/category/CategoryPage";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./components/protected-route/index.jsx";
import AuthPage from "./pages/authpage/AuthPage.jsx";
import { useUserContext } from "./context/user.js";
import { PageLayout } from "./pages/layout/Layout.jsx";

export const AppRoutes = () => {
    const {user} = useUserContext();
    
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
            <Route index element={<MainPage user={user} />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<AuthPage isLoginMode={true} />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

