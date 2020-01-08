const data = [
  {
    name: "Run 1",
    metrics: [
      { metric: "RMSE", value: 31.35 },
      { metric: "MAE", value: 20.25 },
      { metric: "R2", value: 0.96 },
      { metric: "Accuracy", value: 0.87 }
    ],
    hyperparameter: [
      { param: "num_units", value: 20 },
      { param: "dropout_rate", value: 0.1 },
      { param: "optimizer", value: "adam" },
      { param: "learning_rate", value: 0.001 }
    ],
    features: [
      { feature: "var1", importance: 0.25 },
      { feature: "var2", importance: 0.12 },
      { feature: "var3", importance: 0.24 },
      { feature: "var4", importance: 0.01 },
      { feature: "var5", importance: 0.05 },
      { feature: "var6", importance: 0.06 },
      { feature: "var7", importance: 0.16 },
      { feature: "var8", importance: 0.1 }
    ]
  },
  {
    name: "Run 2",
    metrics: [
      { metric: "RMSE", value: 33.23 },
      { metric: "MAE", value: 21.76 },
      { metric: "R2", value: 0.95 },
      { metric: "Accuracy", value: 0.77 }
    ],
    hyperparameter: [
      { param: "num_units", value: 65 },
      { param: "dropout_rate", value: 0.2 },
      { param: "optimizer", value: "sgd" },
      { param: "learning_rate", value: 0.005 }
    ],
    features: [
      { feature: "var1", importance: 0.02 },
      { feature: "var2", importance: 0.13 },
      { feature: "var3", importance: 0.15 },
      { feature: "var4", importance: 0.16 },
      { feature: "var5", importance: 0.11 },
      { feature: "var6", importance: 0.15 },
      { feature: "var7", importance: 0.14 },
      { feature: "var8", importance: 0.14 }
    ]
  },
  {
    name: "Run 3",
    metrics: [
      { metric: "RMSE", value: 45.74 },
      { metric: "MAE", value: 30.23 },
      { metric: "R2", value: 0.83 },
      { metric: "Accuracy", value: 0.85 }
    ],
    hyperparameter: [
      { param: "num_units", value: 100 },
      { param: "dropout_rate", value: 0.5 },
      { param: "optimizer", value: "adam" },
      { param: "learning_rate", value: 0.01 }
    ],
    features: [
      { feature: "var1", importance: 0.14 },
      { feature: "var2", importance: 0.25 },
      { feature: "var3", importance: 0.18 },
      { feature: "var4", importance: 0.22 },
      { feature: "var5", importance: 0.09 },
      { feature: "var6", importance: 0.03 },
      { feature: "var7", importance: 0.08 },
      { feature: "var8", importance: 0.02 }
    ]
  }
];

export default data;
