export default function DashboardCard({
  icon,
  title,
  value,
  unit,
  description,
}) {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-top">
        <div className="dashboard-icon">
          {icon}
        </div>

        <span className="dashboard-arrow">
          ↗
        </span>
      </div>

      <div className="dashboard-card-value">
        {value}
        <small>{unit}</small>
      </div>

      <h3>{title}</h3>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}