exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /offending-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/plataforma-templates`,
    toPath: `https://www.transdesk.com.br/plataforma-templates`,
  });
};
