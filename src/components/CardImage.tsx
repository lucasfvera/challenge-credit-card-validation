interface CardImageProps {
    cardNumber: string;
    cardName: string;
    expirationMonth: string;
    expirationYear: string;
    cardCode: string;
}

export const CardImage = ({
    cardNumber,
    cardName,
    expirationMonth,
    expirationYear,
    cardCode,
}: CardImageProps) => {
    return (
        <div className="h-[270px] w-[430px] bg-amber-400 self-center p-8 rounded-2xl relative flex flex-col">
            <p>{cardNumber || "XXXXXXXXXXXXXXXX"}</p>
            <br />
            <br />
            <br />
            <div className="w-full h-[40px] absolute top-16 left-0 bg-neutral-900"></div>
            <div className="flex flex-col flex-1 justify-between">
                <p>{cardName || "CARD HOLDER"}</p>
                <div className="flex justify-between">
                    <p>
                        {expirationMonth || "MM"}/{expirationYear || "YYYY"}
                    </p>
                    <p>{cardCode || "CVV"}</p>
                </div>
            </div>
        </div>
    );
};
