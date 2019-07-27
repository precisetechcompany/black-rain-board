// let sinon = require('sinon');
// let expect = require("chai").expect;
// var assert = require('chai').assert;
// import * as Q from "q";
// import * as mongoose from 'mongoose';
// import express = require('express');
// import { Request, Response } from "express";

// let MockExpressRequest = require('mock-express-request');
// let MockExpressResponse = require('mock-express-response');

// import Util = require('../util/TestUtil');
// import BoardController = require('../../src/controllers/BoardController');
// import { access } from "fs";
// let responseWrapper = require("api-response");
// let ApiResponse = responseWrapper.apiResponse;
// let MetaData = responseWrapper.metadata;
// let Board = mongoose.model('Boards');

// function getStubData() {

//   let util: Util = new Util();
//   let connectionPool: any;
//   let boardService = util.boardService(connectionPool);
//   let board = util.getBoardByID('251d5571-84a5-49da-aee7-74ce22f6fe23');


//   let request: Request = new MockExpressRequest();
//   let response: Response = new MockExpressResponse();
//   let responseMock = sinon.mock(response);
//   let boardServiceMock = sinon.mock(boardService);
//   return {
//     boardService: boardService,
//     request: request,
//     response: response,
//     board: board,
//     boardMock: boardServiceMock,
//     responseMock: responseMock
//   }

// }

// describe("boardController", function () {
//   describe("getBoardDetails", function () {
//     it('should return board', function (done: any) {

//         let response1: Response = new MockExpressResponse();
//         let StubData = getStubData();
//         let mockedPromise1 = Q.defer();
//         var spy1 = sinon.spy(response1, 'status');
        
//         let assetStub = sinon.stub(StubData.boardService, 'getAssetsRegistryData');
//         assetStub.withArgs({ "_id": "251d5571-84a5-49da-aee7-74ce22f6fe23" }).returns(mockedPromise1.promise);
//         let boardController: BoardController.BoardController;
//         StubData.request["params"] = {
//           id: "251d5571-84a5-49da-aee7-74ce22f6fe23"
//         };
//         boardController.getboardById(StubData.request, response4);
//         mockedPromise1.resolve(StubData.asset);
//         mockedPromise1.promise.then((response1) => {
//           expect(response1).to.deep.equal(StubData.board);
//           done();
//           assetStub.restore();
//         }).catch((err) => {
//           console.log("Error getting board: ", err);
//           done();
//         });
//     });
//   });
// });