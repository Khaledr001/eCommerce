const paginator = (currentPage, pageSize) => { 
    pageSize = parseInt(pageSize);
    currentPage = parseInt(currentPage);
    const aggregator = [];
    aggregator.push({
      $skip: (currentPage - 1) * pageSize,
    });
    aggregator.push({
      $limit: pageSize * 1,
    });

    return aggregator;
}

module.exports = paginator;