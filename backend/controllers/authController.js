import User from "../models/user.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();

  res.status(201).json({
    token,
  });
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //Verificando se o email e a senha foram informados
  if (!email || !password) {
    return next(new ErrorHandler("Por favor, informe seu e-mail e senha", 400));
  }

  //Encontrando o usuário no banco de dados
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Por favor, informe o usuário", 401));
  }

  //Comparando a senha informada com a senha do banco de dados
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("E-mail ou senha inválidos", 401));
  }

  const token = user.getJwtToken();

  res.status(200).json({
    token,
  });
});
