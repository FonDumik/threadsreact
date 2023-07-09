import { Box, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Content, Image } from "./styled";
import { useTelegram } from "../../hooks/useTelegram";

export const AppForm = () => {
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const { tg, onClose } = useTelegram();

    const changePasswordHandler = (e: { target: { value: any } }) => {
        setPassword(e.target.value);
    };
    const changeLoginHandler = (e: { target: { value: any } }) => {
        setLogin(e.target.value);
    };

    const onSendData = useCallback(() => {
        const data = {
            login,
            password,
        };
        tg.sendData(JSON.stringify(data));
        onClose();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login, password]);

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные",
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!login || !password) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login, password]);

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": {
                    m: "10px",
                    width: "30ch",
                },
            }}
            noValidate
            autoComplete="off"
            color="white"
        >
            <Content>
                <Image src="Threads.jpeg" alt="" />
                <TextField
                    required
                    id="outlined-required"
                    label="Логин"
                    onChange={changeLoginHandler}
                />
                <TextField
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={changePasswordHandler}
                />
                {/* <ButtonWrapper>
                    <Button variant="outlined" fullWidth onClick={postData}>
                        Вход
                    </Button>
                </ButtonWrapper> */}
            </Content>
        </Box>
    );
};
