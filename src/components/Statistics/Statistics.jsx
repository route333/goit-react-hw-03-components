import  "./Statistics.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics__sec">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item1">
          <span className="label">.docx</span>
          <span className="percentage">{stats.docxPercentage}%</span>
        </li>
        <li className="item2">
          <span className="label">.mp3</span>
          <span className="percentage">{stats.mp3Percentage}%</span>
        </li>
        <li className="item3">
          <span className="label">.pdf</span>
          <span className="percentage">{stats.pdfPercentage}%</span>
        </li>
        <li className="item4">
          <span className="label">.mp4</span>
          <span className="percentage">{stats.mp4Percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;