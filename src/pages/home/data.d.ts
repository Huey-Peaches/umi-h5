/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:22:07
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 16:52:43
 */
import { PaginationParams } from '@/utils/global';
export interface homeWikiParams extends PaginationParams {
  state: number;
}
export interface liveDateItem {
  allow_reserve: boolean;
  cover_url: string;
  is_have_playback: boolean;
  is_reserve: boolean;
  is_show_start: boolean;
  live_end_at: string;
  live_id: number;
  live_people: string;
  live_start_at: string;
  live_status: number;
  live_time: string;
  live_title: string;
  play_default_url: string;
  reserve_count: number;
  state_desc: string;
}
