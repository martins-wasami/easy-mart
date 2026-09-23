import LogoIcon from "@/shared/assets/icons/logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import Search from "@/shared/assets/icons/Search.svg?react";
import UsersIcon from "@/shared/assets/icons/Users.svg?react";

import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";

import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";
import { useTranslation } from "react-i18next";


export const Header = () => {
   const {t} = useTranslation();

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(routePaths.login);
    }
   
 
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <LogoIcon className={styles.logo} />
                <Button theme="ghost">
                    <AppIcon Icon={MapPin} />
                    <span>10115 New York</span>
                </Button>
            </div>
            <div className={styles.section}>
                <Input rounded placeholder={t('header.searchBy')}  Icon={<AppIcon Icon={Search} size={18} theme="background" />} />

            </div>

            <div className={styles.section}>
                <Button theme="secondary">Cart</Button>
                <Button onClick={handleLoginClick} theme="outline">
                    <AppIcon Icon={UsersIcon} />
                    <span>{t('header.login')}</span>
                </Button>

               <ThemeSwitcher/>
               <LanguageSwitcher/>
            </div>
        </header>
    );
};
