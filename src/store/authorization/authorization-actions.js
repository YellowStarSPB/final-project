export const SET_STATUS = 'SET_STATUS';
export const SET_ERROR = 'SET_ERROR';
export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';


//action for error
const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

//action for status
const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status,
});

//action for auth
const setAuthorization = (data) => ({
    type: SET_AUTHORIZATION,
    payload: data,
});

//thunk action for auth
export const checkUserAuth =
    ({ login, password }) =>
    async (dispatch) => {
        dispatch(setStatus('loading'));
        try {
            const response = await fetch(
                'https://gateway.scan-interfax.ru/api/v1/account/login',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login,
                        password,
                    }),
                },
            );
            const data = await response.json();
            if (response.ok) {
                const { accessToken, expire } = data;
                dispatch(
                    setAuthorization({
                        token: accessToken,
                        timeToDeath: expire.slice(0, 10),
                    }),
                );
                dispatch(setStatus('completed'));
            } else {
                const { message } = data;
                dispatch(setError(message));
                dispatch(setStatus('error'));
            }
        } catch (error) {
            console.log(error);
            dispatch(setError('Что-то пошло не так'));
        }
    };