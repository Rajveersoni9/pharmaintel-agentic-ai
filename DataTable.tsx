interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/20">
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left py-3 px-4 text-sm text-white/70"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-white/10 hover:bg-white/5 transition-colors"
            >
              {columns.map((column) => (
                <td key={column.key} className="py-3 px-4 text-sm text-white">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}