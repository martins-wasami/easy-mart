import { useTranslation } from "react-i18next";

import { cn } from "@/shared/lib";

import styles from './PageLoader.module.scss'

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