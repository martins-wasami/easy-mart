import { useTranslation } from "react-i18next";
import styles from './PageLoader.module.scss'
import { cn } from "@/shared/lib";

interface PageLoaderProps {
    fullscreen?: boolean;
}


export const PageLoader = (props: PageLoaderProps) => {
    const {fullscreen} = props
    const {t} = useTranslation()
    return (
        <div className={cn(styles.wrapper, {[styles.fullscreen]: fullscreen})}>
            <h1 className={styles.title}>
                {t('pageLoader.loading')}
            </h1>
        </div>
    )
}