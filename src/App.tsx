import { useMemo, useState } from "react";
import "./App.css";
import { CardImage } from "./components/CardImage";
import { errorMessages, validators } from "./utils/validators";
import { ErrorMessage } from "./components/ErrorMessage";

const INITIAL_STATE = {
    cardNumber: {
        value: "",
        errors: [errorMessages.cardNumber],
    },
    cardName: {
        value: "",
        errors: [errorMessages.cardName],
    },
    expirationMonth: {
        value: "",
        errors: [errorMessages.expirationMonth],
    },
    expirationYear: {
        value: "",
        errors: [errorMessages.expirationYear],
    },
    cardCode: {
        value: "",
        errors: [errorMessages.cardCode],
    },
};

function App() {
    const [formState, setFormState] = useState(INITIAL_STATE);

    const resetError = (target: keyof typeof formState) => {
        setFormState((prev) => ({
            ...prev,
            [target]: {
                ...prev[target],
                errors: [],
            },
        }));
    };

    const setError = (target: keyof typeof formState, message: string) => {
        setFormState((prev) => ({
            ...prev,
            [target]: {
                ...prev[target],
                errors: [message],
            },
        }));
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.name as keyof typeof formState;
        const value = e.target.value;

        setFormState((prev) => ({
            ...prev,
            [target]: {
                ...prev[target],
                value: value,
            },
        }));
        const { isValid } = validators[target](value);
        if (!isValid) {
            setError(target, errorMessages[target]);
        } else {
            resetError(target);
        }
    };

    const isDisabled = useMemo(() => {
        let disable = false;
        for (const key in formState) {
            disable =
                formState[key as keyof typeof formState].errors.length > 0 ||
                disable;
        }
        return disable;
    }, [formState]);

    return (
        <div>
            <div className="container">
                <h1 className="text-2xl">Credit Card</h1>

                <CardImage
                    cardNumber={formState.cardNumber.value}
                    cardName={formState.cardName.value}
                    expirationMonth={formState.expirationMonth.value}
                    expirationYear={formState.expirationYear.value}
                    cardCode={formState.cardCode.value}
                />

                <form
                    className="flex flex-col gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="card-number-input">Card Number</label>
                        <input
                            type="text"
                            id="card-number-input"
                            name="cardNumber"
                            onChange={changeHandler}
                            value={formState.cardNumber.value}
                        />
                        <ErrorMessage errors={formState.cardNumber.errors} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="card-number-input">Card Name</label>
                        <input
                            type="text"
                            id="card-number-input"
                            name="cardName"
                            onChange={changeHandler}
                            value={formState.cardName.value}
                        />
                        <ErrorMessage errors={formState.cardName.errors} />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="exp-month-input">
                                Expiration Month
                            </label>
                            <input
                                type="number"
                                id="exp-month-input"
                                name="expirationMonth"
                                onChange={changeHandler}
                                value={formState.expirationMonth.value}
                            />
                            <ErrorMessage
                                errors={formState.expirationMonth.errors}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="exp-year-input">
                                Expiration Year
                            </label>
                            <input
                                type="number"
                                id="exp-year-input"
                                name="expirationYear"
                                onChange={changeHandler}
                                value={formState.expirationYear.value}
                            />
                            <ErrorMessage
                                errors={formState.expirationYear.errors}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="card-code-input">CVV</label>
                            <input
                                type="number"
                                id="card-code-input"
                                name="cardCode"
                                onChange={changeHandler}
                                value={formState.cardCode.value}
                            />
                            <ErrorMessage errors={formState.cardCode.errors} />
                        </div>
                    </div>
                    <button
                        disabled={isDisabled}
                        className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 disabled:bg-emerald-200 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer w-full p-4 rounded-2xl font-semibold transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
