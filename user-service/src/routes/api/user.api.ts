import { Request, Response, Router } from "express";
import i18n from "i18n";
import { HTTP_STATUS_CODES } from "../../utils/consts";
import UserController from "../../controller/user.controller";

const router = Router();

/**
 * Create user
 * @param {object}
 * @returns {object}
 */
router.post("/auth/register", async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { doc } = body;
    return res.status(HTTP_STATUS_CODES.OK).json({
      success: true,
      message: i18n.__("response.ok"),
      userId: await UserController.signUp(doc),
    });
  } catch (err: any) {
    return err;
  }
});

/**
 * SignIn
 * @param {object}
 * @returns {object}
 */
router.post("/user/sign-in", async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { doc } = body;
    return res.status(HTTP_STATUS_CODES.OK).json({
      success: true,
      message: i18n.__("response.ok"),
      userId: await UserController.signUp(doc),
    });
  } catch (err: any) {
    return err;
  }
});

// /**
//  * Create user
//  * @param {object}
//  * @returns {object}
//  */
// router.post(
//   "/user/create-manager",
//   async (req: Request, res: Response): Promise<any> => {
//     try {
//       const { body } = req;
//       const { doc, user } = body;
//       return res.status(HTTP_STATUS_CODES.CREATED).json({
//         success: true,
//         message: await UserController.createManager(doc, user),
//       });
//     } catch (err: any) {
//       return err;
//     }
//   }
// );

// /**
//  * Update user
//  * @param {object}
//  * @returns {object}
//  */
// router.put(
//   "/user/update",
//   async (req: Request, res: Response): Promise<object> => {
//     try {
//       const { body } = req;
//       const { doc, user } = body;
//       return res.status(HTTP_STATUS_CODES.ACCEPTED).json({
//         success: true,
//         message: await UserController.update(doc, user),
//       });
//     } catch (err: any) {
//       return errorHandler(res, err);
//     }
//   }
// );

// /**
//  * Change status user
//  * @param {object}
//  * @returns {object}
//  */
// router.put(
//   "/user/change-status",
//   async (req: Request, res: Response): Promise<object> => {
//     try {
//       const { body } = req;
//       const { doc, user } = body;
//       return res.status(HTTP_STATUS_CODES.ACCEPTED).json({
//         success: true,
//         message: await UserController.changeStatus(doc, user),
//       });
//     } catch (err: any) {
//       return errorHandler(res, err);
//     }
//   }
// );

// /**
//  * Get user information
//  * @param {object}
//  * @returns {object}
//  */
// router.post("/user/info", async (req: Request, res: Response) => {
//   try {
//     const { body } = req;
//     const { doc, user } = body;
//     return res.status(HTTP_STATUS_CODES.OK).json({
//       success: true,
//       message: i18n.__("response.ok"),
//       user: await UserController.getUser(doc, user),
//     });
//   } catch (err: any) {
//     return errorHandler(res, err);
//   }
// });

// /**
//  * Get user list
//  * @param {object}
//  * @returns {object}
//  */
// router.post(
//   "/user/list",
//   async (req: Request, res: Response): Promise<object> => {
//     try {
//       const { body } = req;
//       const { doc, user } = body;
//       const { count, rows } = await UserController.getList(doc, user);
//       return res.status(HTTP_STATUS_CODES.OK).json({
//         success: true,
//         message: i18n.__("response.ok"),
//         users: rows,
//         count,
//       });
//     } catch (err: any) {
//       return errorHandler(res, err);
//     }
//   }
// );

export default router;
