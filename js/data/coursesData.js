// MonoCode — Base de Dados de Cursos e Lições (agregador)
// Cada curso vive em seu próprio arquivo para manter conteúdo didático rico
// sem um único arquivo gigante. A ordem aqui define a ordem exibida no site.

import { JAVASCRIPT_COURSE } from './courses/javascript.js';
import { PYTHON_COURSE } from './courses/python.js';
import { HTML_COURSE } from './courses/html.js';
import { CSS_COURSE } from './courses/css.js';
import { TYPESCRIPT_COURSE } from './courses/typescript.js';
import { REACT_NATIVE_COURSE } from './courses/react-native.js';
import { SQL_COURSE } from './courses/sql.js';
import { C_COURSE } from './courses/c.js';
import { CPP_COURSE } from './courses/cpp.js';
import { CSHARP_COURSE } from './courses/csharp.js';

export const COURSES_DATA = [
  JAVASCRIPT_COURSE,
  PYTHON_COURSE,
  HTML_COURSE,
  CSS_COURSE,
  TYPESCRIPT_COURSE,
  REACT_NATIVE_COURSE,
  SQL_COURSE,
  C_COURSE,
  CPP_COURSE,
  CSHARP_COURSE,
];
