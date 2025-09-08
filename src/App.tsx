import "./App.css";

function App() {
    return (
        <div>
            <div className="container">
                <h1 className="text-2xl">Credit Card</h1>

                <div className="h-[270px] w-[430px] bg-amber-400 self-center p-8 rounded-2xl relative flex flex-col">
                    <p>XXXXXXXXXXXXXXXX</p>
                    <br />
                    <br />
                    <br />
                    <div className="w-full h-[40px] absolute top-16 left-0 bg-neutral-900"></div>
                    <div className="flex flex-col flex-1 justify-between">
                        <p>CARD HOLDER</p>
                        <div className="flex justify-between">
                            <p>MM/YYYY</p>
                            <p>CVV</p>
                        </div>
                    </div>
                </div>

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
                        />
                        <p className="text-red-700">Invalid Card Number</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="card-number-input">Card Name</label>
                        <input
                            type="text"
                            id="card-number-input"
                            name="cardName"
                        />
                        <p className="text-red-700">Invalid Card Name</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="card-number-input">
                                Expiration Month
                            </label>
                            <input id="card-number-input" name="cardNumber" />
                            <p className="text-red-700">Invalid Month</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="card-number-input">
                                Expiration Year
                            </label>
                            <input id="card-number-input" name="cardNumber" />
                            <p className="text-red-700">Invalid Year</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="card-number-input">CVV</label>
                            <input id="card-number-input" name="cardNumber" />
                            <p className="text-red-700">Invalid CVV</p>
                        </div>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 disabled:bg-emerald-200 w-full p-4 rounded-2xl font-semibold transition-all">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
