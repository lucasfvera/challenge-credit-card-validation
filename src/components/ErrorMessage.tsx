export const ErrorMessage = ({ errors }: { errors: string[] }) => {
    return errors.map((e, i) => (
        <p key={i} className="text-red-700">
            {e}
        </p>
    ));
};
