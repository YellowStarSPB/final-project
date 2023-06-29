export const getHistograms = (token, searchData) => async (dispatch) => {
    const response = await fetch(
        'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                issueDateInterval: {
                    startDate: '2019-01-01T00:00:00+03:00', // дата из формы from
                    endDate: '2022-08-31T23:59:59+03:00', // дата из формы to
                },
                searchContext: {
                    targetSearchEntitiesContext: {
                        targetSearchEntities: [
                            {
                                type: 'company', //дэфолт
                                sparkId: null, //дэфлдт
                                entityId: null, //дэфолт
                                inn: 7710137066, //получаем из формы, поле - ИНН
                                maxFullness: true, //Признак максимальной полноты - из чекбокса
                                inBusinessNews: null, //Упоминания в бизнес-контексте из чекбокса
                            },
                        ],
                        onlyMainRole: true, //Главная роль в публикации из чек бокса
                        tonality: 'any', // тональность из формы
                        onlyWithRiskFactors: false, //Публикации только с риск-факторами из чек бокса
                    },
                },

                attributeFilters: {
                    excludeTechNews: true,
                    excludeAnnouncements: true,
                    excludeDigests: true,
                },
                similarMode: 'duplicates', //+
                limit: 1000, //из поля количество документов
                sortType: 'issueDate', //+
                sortDirectionType: 'desc',
                intervalType: 'month', //+
                histogramTypes: ['totalDocuments', 'riskFactors'], //+
            }),
        },
    );
    const data = await response.json();
    console.log(data);
};
