export default async Model => {
  return {
    async listAll(req, res, next) {
      // check if req.restOptions.parent, if parent query by parentId
      const instances = req.restOptions?.parent
        ? await Model.findAll({
            where: req.restOptions.parent,
            // {
            //     [req.restOptions.parent.parentName]:
            //       req.restOptions.parent.parentId,
            //   },
          })
        : await Model.findAll();
      res.json(instances);
    },

    async byId(req, res, next) {
      const instance = await Model.findByPk(req.params.id);
      res.json(instance);
    },

    async create(req, res, next) {
      // check if parent, add parent id to req.body
      req.body = req.restOptions?.parent
        ? { ...req.body, ...req.restOptions.parent }
        : req.body;

      const instance = await Model.create(req.body);
      res.json(instance);
    },

    async update(req, res, next) {
      const instance = await Model.findByPk(req.params.id);

      await instance.update(req.body);
      res.json(instance);
    },

    async remove(req, res, next) {
      const instance = await Model.findByPk(req.params.id);
      await instance.destroy();
      res.status(204).json(req.params.id);
    },
  };
};
