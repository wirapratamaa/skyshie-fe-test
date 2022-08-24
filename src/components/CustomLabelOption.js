export const CustomOptionLabel = ({ label, className, dataCy }) => (
  <div
    className="flex items-center space-x-2"
    data-cy={"modal-add-priority-item"}
  >
    <div className={"h-4 w-4 rounded-full " + className} />
    <div className="">{label}</div>
  </div>
);
