import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  getStatsStart,
  getStatsSuccess,
  getStatsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  filterSongsStart,
  filterSongsSuccess,
  filterSongsFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songsSlice";
import SongsService from "../../services/songsService";
import { song, stats } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterCriteria } from "./songsSlice";
function* fetchSongSaga() {
  try {
    const data: song[] = yield call(SongsService.fetchSongs);
    yield put(getSongsSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(getSongsFailure(error.message));
    } else {
      yield put(getSongsFailure("An unknown error occurred"));
    }
  }
}

function* fetchStatsSaga() {
  try {
    const data: stats = yield call(SongsService.fetchStats);

    yield put(getStatsSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(getStatsFailure(error.message));
    } else {
      yield put(getStatsFailure("An unknown error occurred"));
    }
  }
}

function* createSongSaga(action: PayloadAction<song>) {
  try {
    const data: song = yield call(SongsService.createSong, action.payload);
    yield put(createSongSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(createSongFailure(error.message));
    } else {
      yield put(createSongFailure("An unknown error occurred"));
    }
  }
}

function* filterSongsSaga(action: PayloadAction<FilterCriteria>) {
  try {
    const data: song[] = yield call(SongsService.filterSongs, action.payload);
    console.log(data, "data");
    yield put(filterSongsSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(filterSongsFailure(error.message));
    } else {
      yield put(filterSongsFailure("An unknown error occurred"));
    }
  }
}

function* updateSongSaga(action: PayloadAction<song>) {
  try {
    const data: song = yield call(SongsService.updateSong, action.payload);
    yield put(updateSongSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(updateSongFailure(error.message));
    } else {
      yield put(updateSongFailure("An unknown error occurred"));
    }
  }
}

function* deleteSongSaga(action: PayloadAction<string>) {
  try {
    yield call(SongsService.deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(deleteSongFailure(error.message));
    } else {
      yield put(deleteSongFailure("An unknown error occurred"));
    }
  }
}

export default function* songsSaga() {
  yield takeEvery(getStatsStart.type, fetchStatsSaga);
  yield takeLatest(getSongsStart.type, fetchSongSaga);
  yield takeLatest(createSongStart.type, createSongSaga);
  yield takeLatest(filterSongsStart.type, filterSongsSaga);
  yield takeLatest(updateSongStart.type, updateSongSaga);
  yield takeLatest(deleteSongStart.type, deleteSongSaga);
}
