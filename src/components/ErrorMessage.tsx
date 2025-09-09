export const ErrorMessage = ({ errors }: { errors: string[] }) => {
    if (!errors.length) return <p className="text-green-700">Valid</p>;
    return errors.map((e, i) => (
        <p key={i} className="text-red-700">
            {e}
        </p>
    ));
};
