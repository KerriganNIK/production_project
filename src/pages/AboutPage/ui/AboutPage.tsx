import React from 'react';
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation('about');

    function test() {
        throw new Error();
    }

    return (
        <div>
            {t('О сайте')}
            <button onClick={test}>TEST</button>
        </div>
    );
};

export default AboutPage;