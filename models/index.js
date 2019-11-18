import path from 'path';
import Sequelize from 'sequelize';

import CategoryConst from './category';
import DisplayInfoConst from './display_info';
import DisplayInfoImageConst from './display_info_image';
import FileInfoConst from './file_info';
import ProductImageConst from './product_image';
import ProductPriceConst from './product_price';
import ProductConst from './product';
import PromotionConst from './promotion';
import ReservationInfoPriceConst from './reservation_info_price';
import ReservationEmailConst from './reservation_email';
import ReservationInfoConst from './reservation_info';
import ReservationUserCommentImageConst from './reservation_user_comment_image';
import ReservationUserCommentConst from './reservation_user_comment';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[
  env
];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Category = CategoryConst(sequelize, Sequelize);
db.DisplayInfo = DisplayInfoConst(sequelize, Sequelize);
db.DisplayInfoImage = DisplayInfoImageConst(sequelize, Sequelize);
db.FileInfo = FileInfoConst(sequelize, Sequelize);
db.ProductImage = ProductImageConst(sequelize, Sequelize);
db.ProductPrice = ProductPriceConst(sequelize, Sequelize);
db.Product = ProductConst(sequelize, Sequelize);
db.Promotion = PromotionConst(sequelize, Sequelize);
db.ReservationInfoPrice = ReservationInfoPriceConst(sequelize, Sequelize);
db.ReservationEmail = ReservationEmailConst(sequelize, Sequelize);
db.ReservationInfo = ReservationInfoConst(sequelize, Sequelize);
db.ReservationUserCommentImage = ReservationUserCommentImageConst(
  sequelize,
  Sequelize,
);
db.ReservationUserComment = ReservationUserCommentConst(sequelize, Sequelize);

db.Category.hasMany(db.Product, { foreignKey: 'category_id', sourceKey: 'id' });
db.Product.belongsTo(db.Category, {
  foreignKey: 'category_id',
  targetKey: 'id',
});

db.Product.hasMany(db.Promotion, { foreignKey: 'product_id', sourceKey: 'id' });
db.Promotion.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.Product.hasMany(db.ProductImage, {
  foreignKey: 'product_id',
  sourceKey: 'id',
});
db.ProductImage.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.Product.hasMany(db.DisplayInfo, {
  foreignKey: 'product_id',
  sourceKey: 'id',
});
db.DisplayInfo.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.Product.hasMany(db.ReservationUserComment, {
  foreignKey: 'product_id',
  sourceKey: 'id',
});
db.ReservationUserComment.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.Product.hasMany(db.ReservationInfo, {
  foreignKey: 'product_id',
  sourceKey: 'id',
});
db.ReservationInfo.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.DisplayInfo.hasMany(db.ReservationInfo, {
  foreignKey: 'display_info_id',
  sourceKey: 'id',
});
db.ReservationInfo.belongsTo(db.DisplayInfo, {
  foreignKey: 'display_info_id',
  targetKey: 'id',
});

db.Product.hasMany(db.ProductPrice, {
  foreignKey: 'product_id',
  sourceKey: 'id',
});
db.ProductPrice.belongsTo(db.Product, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

db.DisplayInfo.hasMany(db.DisplayInfoImage, {
  foreignKey: 'display_info_id',
  sourceKey: 'id',
});
db.DisplayInfoImage.belongsTo(db.DisplayInfo, {
  foreignKey: 'display_info_id',
  targetKey: 'id',
});

db.FileInfo.hasMany(db.DisplayInfoImage, {
  foreignKey: 'file_id',
  sourceKey: 'id',
});
db.DisplayInfoImage.belongsTo(db.FileInfo, {
  foreignKey: 'file_id',
  targetKey: 'id',
});

db.FileInfo.hasMany(db.ProductImage, {
  foreignKey: 'file_id',
  sourceKey: 'id',
});
db.ProductImage.belongsTo(db.FileInfo, {
  foreignKey: 'file_id',
  targetKey: 'id',
});

db.FileInfo.hasMany(db.ReservationUserCommentImage, {
  foreignKey: 'file_id',
  sourceKey: 'id',
});
db.ReservationUserCommentImage.belongsTo(db.FileInfo, {
  foreignKey: 'file_id',
  targetKey: 'id',
});

db.ProductPrice.hasMany(db.ReservationInfoPrice, {
  foreignKey: 'product_price_id',
  sourceKey: 'id',
});
db.ReservationInfoPrice.belongsTo(db.ProductPrice, {
  foreignKey: 'product_price_id',
  targetKey: 'id',
});

db.ReservationInfo.hasMany(db.ReservationInfoPrice, {
  foreignKey: 'reservation_info_id',
  sourceKey: 'id',
});
db.ReservationInfoPrice.belongsTo(db.ReservationInfo, {
  foreignKey: 'reservation_info_id',
  targetKey: 'id',
});

db.ReservationInfo.hasMany(db.ReservationUserComment, {
  foreignKey: 'reservation_info_id',
  sourceKey: 'id',
});
db.ReservationUserComment.belongsTo(db.ReservationInfo, {
  foreignKey: 'reservation_info_id',
  targetKey: 'id',
});

db.ReservationInfo.hasMany(db.ReservationUserCommentImage, {
  foreignKey: 'reservation_info_id',
  sourceKey: 'id',
});
db.ReservationUserCommentImage.belongsTo(db.ReservationInfo, {
  foreignKey: 'reservation_info_id',
  targetKey: 'id',
});

db.ReservationUserComment.hasMany(db.ReservationUserCommentImage, {
  foreignKey: 'reservation_user_comment_id',
  sourceKey: 'id',
});
db.ReservationUserCommentImage.belongsTo(db.ReservationUserComment, {
  foreignKey: 'reservation_user_comment_id',
  targetKey: 'id',
});

db.ReservationEmail.hasMany(db.ReservationInfo, {
  foreignKey: 'reservation_email_id',
  sourceKey: 'id',
});
db.ReservationInfo.belongsTo(db.ReservationEmail, {
  foreignKey: 'reservation_email_id',
  targetKey: 'id',
});

db.ReservationEmail.hasMany(db.ReservationUserComment, {
  foreignKey: 'reservation_email_id',
  sourceKey: 'id',
});
db.ReservationUserComment.belongsTo(db.ReservationEmail, {
  foreignKey: 'reservation_email_id',
  sourceKey: 'id',
});

export { sequelize, Sequelize };
export const {
  Category,
  DisplayInfo,
  DisplayInfoImage,
  FileInfo,
  ProductImage,
  ProductPrice,
  Product,
  Promotion,
  ReservationInfoPrice,
  ReservationEmail,
  ReservationInfo,
  ReservationUserCommentImage,
  ReservationUserComment,
} = db;
