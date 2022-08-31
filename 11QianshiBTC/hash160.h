/*
 * hash160.c
 * (C) 2015 basil, all rights reserved,
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#ifndef HASH160_H
#define HASH160_H

#include <stdint.h>

union uint160_s
{
    uint8_t i8[20];
    uint16_t i16[10];
    uint32_t i32[5];
};
typedef union uint160_s uint160_t;

extern uint160_t hash160(const uint8_t *pub_key);

#endif
