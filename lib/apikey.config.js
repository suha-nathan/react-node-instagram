/**
 * Description:
 * Dont touch this file
 * இதைத் தொடாதே, Jangan sentuh ini, 不要碰这个
 *
 * @type {UUIDAPIKey | {UUIDOptions: UUIDOptions, ApiKeyInfo: ApiKeyInfo, readonly default: UUIDAPIKey}}
 */
const uuidAPIKey = require("uuid-apikey");
const userModel = require("../model/user.model")
/**
 *
 * @returns '1EEA6DC-JAM4DP2-PHVYPBN-V0XCJ9X'
 */
function apiKeyGenerator() {
  return uuidAPIKey.create().apiKey;
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns obj
 */
async function apiKeyMiddleWare(req, res, next) {
  try{
    if (!req.query.apiKey) {
      throw "You need an apiKey to perform request"
    }
    let user = await userModel.findOne({ apiKey: req.query.apiKey},["-__v", "-password"])

    if(!user){
      throw "You trying to be smart huh, with your fake ass apiKey"
    }

    req.user = user //store user in req.user
    next();//all good and continue

  }catch(e){
    return res.status(401).json({ message: e || "700 error, request not granted"})
  }

 }

module.exports = {
  apiKeyGenerator,
  apiKeyMiddleWare,
};
