export default function paginatedRes(model) {
  return async (req, res, next) => {
    let { page, limit, email } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const startIndex = (page - 1) * limit;
    const endIndex = limit * page;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }
    if (email) {
      results.result = model
        .find({
          email,
        })
        .limit(limit)
        .skip(startIndex);
    }

    results.result = await model.find().limit(limit).skip(startIndex);

    if (!results.result) {
      res.status(404).json({
        prev: null,
        next: null,
        results: null,
        error: "Orders Not Found",
      });
      return;
    }

    res.paginatedRes = results;
    next();
  };
}
