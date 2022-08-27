const FilterJobs = ({ active, workInfo }) => {
  const jobInfo = workInfo.filter((job) => job.id === active);

  return (
    <div>
      <p>{jobInfo[0].title}</p>
      <p>{jobInfo[0].company}</p>
    </div>
  );
};
