const dementions = [10, 20, 5, 10, 8];

function MinMultiMatrix(dementions) {
  //  matrix quantities
  const n = dementions.length - 1;

  //  creating the matrix
  const m_matrix = [];

  //  create the inner matrix
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const item = { value: 0, k: null };
      row.push(item);
    }
    m_matrix.push(row);
  }

  // قطر اصلی صفر میکنیم
  for (let index = 0; index < m_matrix.length; index++) {
    m_matrix[index][index].value = 0;
    m_matrix[index][index].k = 0;
  }

  for (s = 1; s < n; s++) {
    for (let i = 0; i < n - s; i++) {
      const j = i + s;
      let K_ValueArr = [];

      for (let k = i; k < j; k++) {
        K_ValueArr.push({
          value:
            m_matrix[i][k].value +
            m_matrix[k + 1][j].value +
            dementions[i] * dementions[k + 1] * dementions[j + 1],
          k: k,
        });
      }

      const small = K_ValueArr.reduce(function (res, obj) {
        return obj.value < res.value ? obj : res;
      });

      console.log(small);

      m_matrix[i][j] = small;
    }
  }

  console.log(m_matrix);
}

MinMultiMatrix(dementions);
